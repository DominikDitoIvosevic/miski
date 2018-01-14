import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'courses.component.html',
    styleUrls: ['courses.component.css']
})

export class CoursesComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    courses = [{
        title: 'Vojta princip 2018 - primjena u ranoj terapiji dojenčadi i rehabilitaciji djece i mladih',
        date: '25.05.2018. - 31.10.2018.',
        lines: [
            'Mjesto održavanja: Klinika za dječje bolesti Zagreb, Klaićeva 16, Zagreb',
            'Vrijeme za prijavu: 18.10.2017. - 20.12.2017. ',
            'prijave zaključene',
        ]
    },{
        title: 'Kineziološka dijagnostika dojenčadi prema Vojti',
        date: '21.03.2018. - 25.03.2018.',
        lines: [
            'Mjesto održavanja: Specijalna bolnica za djecu sa neurorazvojnim i motoričkim smetnjama Goljak 2, Zagreb',
            'Vrijeme za prijavu: 18.10.2017. - 20.03.2018. ',
            'prijava u tijeku',
        ]
    },{
        title: 'Senzorna integracija prema Ayres ® u pedagogiji/ SIAT® za odgojno obrazovne stručnjake u razvojnoj rehabilitaciji',
        date: '05.02.2018. - 09.02.2018.',
        lines: [
            'Mjesto održavanja: Centar Slava Raškaj, Nazorova 47, Zagreb',
            'Vrijeme za prijavu: 18.11.2017. - 04.02.2018. ',
            'prijave zaključene',
        ]
    }];
}