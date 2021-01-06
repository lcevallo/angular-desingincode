// Import Components

import {TitleH1Component} from '@components/titles/title-h1/title-h1.component';
import {CardUserComponent} from '@components/cards/card-user/card-user.component';
import {CarouselComponent} from '@components/carousel/carousel.component';
import { CardLoaderComponent } from '@components/loaders/card-loader/card-loader.component';

export const components: any[] = [
  CardUserComponent,
  CarouselComponent,
  TitleH1Component,
  CardLoaderComponent

];

// export all components
export * from '@components/titles/title-h1/title-h1.component';
export * from '@components/carousel/carousel.component';
export * from '@components/cards/card-user/card-user.component';
export * from '@components/loaders/card-loader/card-loader.component';

