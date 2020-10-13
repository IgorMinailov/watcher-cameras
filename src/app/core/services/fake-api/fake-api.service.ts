import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

import { Cameras } from '../../../shared/models/Cameras';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  // fake array of image urls
  urls = [
    'https://vizzion.com/img/trafficcams.jpg',
    'https://www.stockvault.net/data/2017/09/14/238787/preview16.jpg',
    'https://mediad.publicbroadcasting.net/p/wvik/files/styles/large/public/201704/dav_wash._st._cameras.jpg',
    'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_300/https://www.universeoptics.com/wp-content/uploads/Traffic_Cameras-300x200.jpg',
    'https://www.get-licensed.co.uk/get-daily/wp-content/uploads/2018/03/cctv-camera.jpg',
    'https://in-cyprus.philenews.com/wp-content/uploads/2020/03/traffic-cameras-5.jpg',
    'https://redvoice.news/content/images/2019/08/cctv.jpeg',
    'https://gray-ky3-prod.cdn.arcpublishing.com/resizer/TIaqe0CNnFlz9eJaU8uZrEyp7aI=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/G4PGNCXS6JJG5KVHJLQHRHLYXI.jpg',
    'https://img.apmcdn.org/79773fd5a6913d3a6d79ff009081d5f060852586/normal/d69546-20130220-traffic-camera.jpg',
    'https://padailypost.com/wp-content/uploads/2019/07/red-light-camera-san-mateo.jpg'
  ];

  constructor() { }

  randomizeUrl(): string[] {
    const randomized = this.urls
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    return randomized;
  }

  getCamerasList(): Observable<Cameras> {
    const randomizedUrls = this.randomizeUrl();
    const responseArr = [];
    for (let i = 0; i < randomizedUrls.length; i++) {
      responseArr.push({
        url: randomizedUrls[i],
        indicator: Boolean(Math.round(Math.random()))
      });
    }
    const cameras: Cameras = {
      count: responseArr.length,
      cameras: responseArr
    };
    return of(cameras);
  }
}
