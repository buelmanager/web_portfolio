import fs from 'fs';
import path from 'path';

export interface Project {
  id: string;
  name: string;
  description: string;
  isComplete: boolean;
  runCommand: string;
  techStack: string[];
  hasReadme: boolean;
}

function extractDescriptionFromReadme(readmePath: string): string {
  try {
    const content = fs.readFileSync(readmePath, 'utf-8');
    const lines = content.split('\n');
    
    for (const line of lines) {
      if (line.startsWith('>')) {
        return line.replace(/^>\s*/, '').trim();
      }
    }
    
    const titleMatch = content.match(/^#\s+(.+)/m);
    if (titleMatch) {
      const afterTitle = content.split(titleMatch[0])[1];
      const firstParagraph = afterTitle?.split('\n\n')[1]?.trim();
      if (firstParagraph && !firstParagraph.startsWith('#') && !firstParagraph.startsWith('-')) {
        return firstParagraph.substring(0, 150);
      }
    }
    
    return '';
  } catch {
    return '';
  }
}

function extractNameFromPackageJson(packageJsonPath: string): { name: string; description: string } {
  try {
    const content = fs.readFileSync(packageJsonPath, 'utf-8');
    const pkg = JSON.parse(content);
    return {
      name: pkg.name || '',
      description: pkg.description || ''
    };
  } catch {
    return { name: '', description: '' };
  }
}

export function getProjects(): Project[] {
  const webDir = path.join(process.cwd(), 'web');
  
  if (!fs.existsSync(webDir)) {
    return [];
  }
  
  const folders = fs.readdirSync(webDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => !name.startsWith('.'));
  
  const projects: Project[] = folders.map(folder => {
    const projectPath = path.join(webDir, folder);
    const srcPath = path.join(projectPath, 'src');
    const packageJsonPath = path.join(projectPath, 'package.json');
    const readmePath = path.join(projectPath, 'c_readme.md');
    
    const isComplete = fs.existsSync(srcPath);
    const hasPackageJson = fs.existsSync(packageJsonPath);
    const hasReadme = fs.existsSync(readmePath);
    
    let description = '';
    let packageName = folder;
    
    if (hasReadme) {
      description = extractDescriptionFromReadme(readmePath);
    }
    
    if (hasPackageJson) {
      const pkgInfo = extractNameFromPackageJson(packageJsonPath);
      if (pkgInfo.name) packageName = pkgInfo.name;
      if (!description && pkgInfo.description) {
        description = pkgInfo.description;
      }
    }
    
    if (!description) {
      description = isComplete ? '웹 프로젝트' : '개발 중인 프로젝트';
    }
    
    return {
      id: folder,
      name: packageName,
      description,
      isComplete,
      runCommand: `cd web/${folder} && npm run dev`,
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
      hasReadme,
    };
  });
  
  return projects.sort((a, b) => {
    if (a.isComplete !== b.isComplete) {
      return a.isComplete ? -1 : 1;
    }
    return a.id.localeCompare(b.id);
  });
}

export function getProjectCount(): { total: number; complete: number; incomplete: number } {
  const projects = getProjects();
  return {
    total: projects.length,
    complete: projects.filter(p => p.isComplete).length,
    incomplete: projects.filter(p => !p.isComplete).length,
  };
}
