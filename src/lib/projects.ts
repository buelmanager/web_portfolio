import fs from 'fs';
import path from 'path';

export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  isComplete: boolean;
  runCommand: string;
  techStack: string[];
  hasReadme: boolean;
  colors: string[];
  image: string;
  year: number;
  hasStaticBuild: boolean;
  demoUrl: string;
}

// Project-specific images based on content type
const projectImages: Record<string, string> = {
  'page1': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200&h=800',
  'page2': 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1200&h=800',
  'page3': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1200&h=800',
  'page4': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200&h=800',
  'page5': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200&h=800',
  'atlas': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200&h=800',
  'aurora': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200&h=800',
  'cook': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200&h=800',
  'dc_home': 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=1200&h=800',
  'energy_solution': 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200&h=800',
  'erection': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200&h=800',
  'luxe': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200&h=800',
  'onyx': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200&h=800',
  'vertex': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=800',
  'zenith': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800',
  'homepage-landing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800',
  'checkmate-landing': 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1200&h=800',
};

const defaultImage = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200&h=800';

function parseClientReadme(readmePath: string): { 
  name: string; 
  description: string; 
  category: string;
  techStack: string[];
  colors: string[];
} {
  try {
    const content = fs.readFileSync(readmePath, 'utf-8');
    const lines = content.split('\n');
    
    let name = '';
    let description = '';
    let category = '';
    let techStack: string[] = [];
    let colors: string[] = [];
    
    // Extract title from first # line
    const titleLine = lines.find(line => line.startsWith('# '));
    if (titleLine) {
      // Handle formats like "# MAISON NOIR - 럭셔리 패션 하우스" or "# atlas | 완벽한 휴식의 시작"
      name = titleLine.replace(/^#\s*/, '').trim();
    }
    
    // Extract description from > quote or ## 개요 section
    const quoteMatch = content.match(/^>\s*(.+)/m);
    if (quoteMatch) {
      description = quoteMatch[1].trim();
    } else {
      // Look for ## 개요 section
      const overviewMatch = content.match(/##\s*개요\n+([^\n#]+)/);
      if (overviewMatch) {
        description = overviewMatch[1].trim();
      }
    }
    
    // Extract category from 업종 or infer from content
    const categoryMatch = content.match(/\*\*업종\*\*:\s*(.+)/);
    if (categoryMatch) {
      category = categoryMatch[1].trim();
    } else {
      // Infer category from name or content
      if (content.includes('패션') || content.includes('Fashion')) category = 'Haute Couture';
      else if (content.includes('시계') || content.includes('Watch')) category = 'Luxury Watch';
      else if (content.includes('가죽') || content.includes('Leather')) category = 'Leather Goods';
      else if (content.includes('커피') || content.includes('Coffee')) category = 'F&B Branding';
      else if (content.includes('자동차') || content.includes('전기차') || content.includes('Automotive')) category = 'Automotive';
      else if (content.includes('호텔') || content.includes('Hotel')) category = 'Hospitality';
      else if (content.includes('스파') || content.includes('Spa') || content.includes('웰니스')) category = 'Wellness';
      else if (content.includes('에너지') || content.includes('Energy')) category = 'Energy';
      else if (content.includes('건설') || content.includes('Construction')) category = 'Construction';
      else if (content.includes('가전') || content.includes('Electronics')) category = 'Electronics';
      else if (content.includes('교육') || content.includes('Academy')) category = 'Education';
      else if (content.includes('인테리어') || content.includes('Interior')) category = 'Interior';
      else if (content.includes('부동산') || content.includes('Real Estate')) category = 'Real Estate';
      else category = 'Digital Experience';
    }
    
    // Extract tech stack
    const techSection = content.match(/##\s*(기술 스택|💻 기술 스택)[\s\S]*?(?=##|$)/);
    if (techSection) {
      const techMatches = techSection[0].match(/[-*]\s*(?:\*\*)?([^*\n:]+?)(?:\*\*)?(?::|$)/g);
      if (techMatches) {
        techStack = techMatches
          .map(t => t.replace(/[-*\s*\*]+/g, '').split(':')[0].trim())
          .filter(t => t.length > 0 && t.length < 30)
          .slice(0, 5);
      }
    }
    
    // Extract colors
    const colorMatches = content.match(/#[0-9A-Fa-f]{6}/g);
    if (colorMatches) {
      colors = [...new Set(colorMatches)].slice(0, 3);
    }
    
    return { name, description, category, techStack, colors };
  } catch {
    return { name: '', description: '', category: '', techStack: [], colors: [] };
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
  
  const projects: Project[] = folders
    .filter(folder => {
      // Only include projects that have c_readme.md
      const readmePath = path.join(webDir, folder, 'c_readme.md');
      return fs.existsSync(readmePath);
    })
    .map(folder => {
    const projectPath = path.join(webDir, folder);
    const srcPath = path.join(projectPath, 'src');
    const packageJsonPath = path.join(projectPath, 'package.json');
    const readmePath = path.join(projectPath, 'c_readme.md');

    const hasSrcFolder = fs.existsSync(srcPath);
    const hasIndexHtml = fs.existsSync(path.join(projectPath, 'index.html'));
    const isComplete = hasSrcFolder || hasIndexHtml;
    const hasPackageJson = fs.existsSync(packageJsonPath);
    const hasReadme = fs.existsSync(readmePath);
    
    let name = folder.toUpperCase();
    let description = '';
    let category = 'Digital Experience';
    let techStack = ['React', 'TypeScript', 'Tailwind CSS'];
    let colors: string[] = [];
    
    // First priority: c_readme.md
    if (hasReadme) {
      const readmeData = parseClientReadme(readmePath);
      if (readmeData.name) name = readmeData.name;
      if (readmeData.description) description = readmeData.description;
      if (readmeData.category) category = readmeData.category;
      if (readmeData.techStack.length > 0) techStack = readmeData.techStack;
      if (readmeData.colors.length > 0) colors = readmeData.colors;
    }
    
    // Fallback to package.json
    if (hasPackageJson && !description) {
      const pkgInfo = extractNameFromPackageJson(packageJsonPath);
      if (!name || name === folder.toUpperCase()) {
        if (pkgInfo.name && pkgInfo.name !== folder) {
          name = pkgInfo.name;
        }
      }
      if (!description && pkgInfo.description) {
        description = pkgInfo.description;
      }
    }
    
    // Default description
    if (!description) {
      description = isComplete ? '프리미엄 웹 경험' : '개발 중인 프로젝트';
    }
    
    const staticBuilds = [
      'page1', 'page2', 'page3', 'page4', 'page5', 'dc_home',
      'atlas', 'aurora', 'cook', 'energy_solution', 'erection', 'onyx', 'vertex', 'zenith',
      'checkmate-landing', 'homepage-landing'
    ];
    const hasStaticBuild = staticBuilds.includes(folder);
    const demoUrl = hasStaticBuild ? `/projects/${folder}/index.html` : '';
    
    return {
      id: folder,
      name,
      description,
      category,
      isComplete,
      runCommand: `cd web/${folder} && npm run dev`,
      techStack,
      hasReadme,
      colors,
      image: projectImages[folder] || defaultImage,
      year: 2024,
      hasStaticBuild,
      demoUrl,
    };
  });
  
  // Priority order - featured projects first
  const priorityOrder = ['zenith'];

  // Sort: priority first, then complete, then by name
  return projects.sort((a, b) => {
    const aPriority = priorityOrder.indexOf(a.id);
    const bPriority = priorityOrder.indexOf(b.id);

    // Priority projects come first
    if (aPriority !== -1 && bPriority === -1) return -1;
    if (bPriority !== -1 && aPriority === -1) return 1;
    if (aPriority !== -1 && bPriority !== -1) return aPriority - bPriority;

    // Then by completion status
    if (a.isComplete !== b.isComplete) {
      return a.isComplete ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
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
