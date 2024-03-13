import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  public workFilter: string;
  public singleGallery1: any;
  public albums: any = [];

  videoObject: Array<object> = [
    {
      video: 'https://youtu.be/x0qmFfuY7eo?si=Uuo51x6yMvydR7F1',
      posterImage: 'assets/images/itsfye01.png'
    }
  ];

  videoObject1: Array<object> = [
    {
      video: 'https://youtu.be/n3TVrKAaY24?si=gWtM5zK0KIrtVDv3',
      posterImage: 'assets/images/itsfye02.png'
    }
  ];

  videoObject2: Array<object> = [
    {
      video: 'https://www.youtube.com/watch?v=NyRQkzUYj0o&t=2s',
      posterImage: 'assets/images/clip3.png'
    }
  ];



  constructor() {
    this.workFilter = 'all';
    this.singleGallery1 = [
      {
        src: 'assets/images/works/1.svg',
        caption: 'Project Management Illustration',
        thumb: 'assets/images/works/1.svg'
      }
    ];

    for (let i = 5; i >= 1; i--) {
      const album = {
        src: 'assets/images/works/' + i + '.svg',
        caption: 'Image ' + i + ' caption here',
        thumb: 'assets/images/works/' + i + '.svg'
      };

      this.albums.push(album);
    }
  }

  ngOnInit(): void {}

  onChange(e) {
    this.workFilter = e.target.value;
  }
}