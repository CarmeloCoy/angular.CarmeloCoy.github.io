import { Component } from '@angular/core';

@Component({
    selector: 'app-skills',
    imports: [],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css',
})
export class SkillsComponent {
    skills = [
        { title: { es: 'Algortimia', en: 'Algorithm' }, value: 4 },
        {
            title: { es: 'Patrones de Diseño', en: 'Design Patterns' },
            value: 4,
        },
        { title: { es: 'Testing', en: 'Testing' }, value: 3 },
        { title: { es: 'Debugging', en: 'Debugging' }, value: 5 },
        { title: { es: 'C++', en: 'C++' }, value: 4 },
        { title: { es: 'Java 8', en: 'Java 8' }, value: 5 },
        { title: { es: 'Java EE', en: 'Java EE' }, value: 4 },
        { title: { es: 'Python', en: 'Python' }, value: 3 },
        { title: { es: 'HTML', en: 'HTML' }, value: 3 },
        { title: { es: 'CSS', en: 'CSS' }, value: 3 },
        { title: { es: 'JavaScript', en: 'JavaScript' }, value: 3 },
        { title: { es: 'Flex CSS', en: 'Flex CSS' }, value: 3 },
        { title: { es: 'SQL', en: 'SQL' }, value: 5 },
        { title: { es: 'NoSQL', en: 'NoSQL' }, value: 2 },
        {
            title: { es: 'Web Service (REST)', en: 'Web Service (REST)' },
            value: 3,
        },
        { title: { es: 'GraphQL', en: 'GraphQL' }, value: 3 },
        { title: { es: 'LaTex', en: 'LaTex' }, value: 4 },
        { title: { es: 'Git', en: 'Git' }, value: 4 },
        { title: { es: 'Docker', en: 'Docker' }, value: 3 },
        { title: { es: 'Scrum', en: 'Scrum' }, value: 3 },
    ];
}
