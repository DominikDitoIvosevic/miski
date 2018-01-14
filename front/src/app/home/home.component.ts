import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    posts = [{
        title: 'Čestitka povodom novogodišnjih blagdana',
        date: '02.01.2018.',
        lines: [
            'Svim članovima Akademije želimo radošću Božića obasjanu cijelu 2018. godinu!',
        ]
    },{
        title: 'Senzorna integracija prema Ayres® u pedagogiji 2018',
        date: '18.11.2017.',
        lines: [
            'Akademija za razvojnu rehabilitaciju i Centar Slava Raškaj, Nazorova 47, Zagreb organiziraju stručno usavršavanje "Senzorna integracija prema Ayres ® u pedagogiji" - SIAT® za odgojno obrazovne stručnjake u razvojnoj rehabilitaciji. ',
            'Stručno usavršavanje namijenjeno je odgojno obrazovnim stručnjacima koji rade s djecom s teškoćama u razvoju, učiteljima, odgojiteljima, psiholozima, rehabilitatorima, terapeutima, socijalnim radnicima. ',
        ]
    },{
        title: 'Vojta princip 2018 – primjena u ranoj terapiji dojenčadi, rehabilitaciji djece i mladih',
        date: '18.10.2017.',
        lines: [
            'Akademija za Razvojnu Rehabilitaciju i Internationale Vojta Gesellschaft organiziraju stručno usavršavanje Vojta princip 2018 – primjena u ranoj terapiji dojenčadi, rehabilitaciji djece i mladih.',
            'Usavršavanje će se odvijati u trajanju od 320 sati u razdoblju od godine i pol dana u blokovima od po deset, pet ili dva i po dana (radi se svaki dan i nedjeljom) od 9.00 do 17.00 h.',
            'Stručno usavršavanje je namijenjeno fizioterapeutima i liječnicima, članovima Akademije za razvojnu rehabilitaciju.',
            'Svrha stručnog usavršavanja može se ostvariti samo ako znanja i vještine koje na stručnom usavršavanju dobiju, polaznici praktično primjenjuju odnosno uvježbavaju.',
            'Polaznici će naučiti primjenu Vojta principa® i po položenom ispitu dobiti će međunarodno priznate potvrdnice Internationale Vojta Gesellschaft (Međunarodnog Vojta društva).',
            'Usavršavanje će se odvijati na njemačkom jeziku uz prevođenje na hrvatski jezik. ',
        ]
    }];
}