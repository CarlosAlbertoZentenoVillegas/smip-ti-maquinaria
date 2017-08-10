import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent implements AfterViewInit {
  title = 'app';


  ngAfterViewInit() {
    // Como ejemplo estoy navegado a una sección
    const $elementToGo = $( '#SeccionNosotrosHome' );

    if ($elementToGo.length > 0) {
      $( 'html,body' )
        .animate( { scrollTop: $elementToGo.offset().top }, 1000 );
    }

  }

}
