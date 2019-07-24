import { Directive, Input, HostListener } from '@angular/core';
import { TrackService } from '../service/track.service';

@Directive({
  selector: '[appTrack]'
})
export class TrackDirective {
  @Input() appTrack;
  @HostListener('click') onClick() {
    this.track.log({
      event: this.appTrack
    });
  }

  constructor(private track: TrackService) {}
}
