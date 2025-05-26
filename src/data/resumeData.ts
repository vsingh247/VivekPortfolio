import { Education, Experience, Skill, Project, Certification, Language, SocialLink } from '../types';

export const personalInfo = {
  name: 'Vivek Singh',
  title: 'Java Backend Developer',
  location: 'Garhwa, India 822112',
  email: 'lsvk674@gmail.com',
  phone: '+918084420619',
  summary: 'Responsible and motivated professional with strong technical abilities in Java backend development. Excellent at handling challenging work with superior time management skills.',
  avatar: '/vivek-profile.jpg',
  resumeURL: '#',
};

export const skills: Skill[] = [
  { name: 'HTML', level: 85, category: 'technical' },
  { name: 'CSS', level: 80, category: 'technical' },
  { name: 'JavaScript', level: 75, category: 'technical' },
  { name: 'PHP', level: 70, category: 'technical' },
  { name: 'Java', level: 85, category: 'technical' },
  { name: 'Data Structures', level: 75, category: 'technical' },
  { name: 'React', level: 70, category: 'technical' },
  { name: 'Tailwind CSS', level: 80, category: 'technical' },
  { name: 'Problem Solving', level: 90, category: 'soft' },
  { name: 'Time Management', level: 85, category: 'soft' },
];

export const experience: Experience[] = [
  {
    role: 'Java Intern',
    company: 'Codsoft Pvt. Ltd',
    location: 'Kolkata, IN',
    period: 'Aug 2024 - Sep 2024',
    description: 'Worked on Java-based projects to enhance programming skills and gain professional experience.',
  }
];

export const education: Education[] = [
  {
    degree: 'B.Tech: Computer Science And Engineering',
    institution: 'RSR Rungta College of Engineering And Technology',
    location: 'Bhilai, Chhattisgarh',
    year: 'Expected in July 2026',
  },
  {
    degree: 'Diploma: Computer Engineering',
    institution: 'Government Polytechnic',
    location: 'Koderma',
    year: 'July 2023',
  },
  {
    degree: 'ITI: Electrician',
    institution: 'OM Prakash Jindal Community College Pvt. ITI',
    location: 'Patratu, Ranchi',
    year: 'August 2019',
  },
  {
    degree: '10th',
    institution: 'Lohiya Samta High School',
    location: 'Ketar, Jharkhand',
    year: 'May 2017',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Java Programming Fundamentals',
    issuer: 'Infosys Springboard',
    date: 'April 2024',
    link: '#',
  },
  {
    title: 'Java DSA Course',
    issuer: 'Scaler',
    date: 'July 2024',
    link: '#',
  },
];

export const languages: Language[] = [
  {
    name: 'Hindi',
    level: 'First Language',
    proficiency: 'Native',
  },
  {
    name: 'English',
    level: 'B1',
    proficiency: 'Intermediate',
  },
];

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS to showcase skills and projects.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A Java-based application for managing tasks and improving productivity.',
    technologies: ['Java', 'Data Structures'],
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vivek-kumar-singh-171112222/',
    icon: 'Linkedin',
  },
  {
    platform: 'GitHub',
    url: '#',
    icon: 'Github',
  },
  {
    platform: 'Twitter',
    url: '#',
    icon: 'Twitter',
  },
];