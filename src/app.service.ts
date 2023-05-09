import { Injectable } from '@nestjs/common';
import { Utils } from './utils/dto/utils';
import { UtilResponse } from './utils/dto/util_response';
import { UtilsService } from './utils/utils.service';

@Injectable()
export class AppService {
  constructor(private readonly utilsService: UtilsService) {}
  postChallenge( utilDto: Utils): UtilResponse {
    return {
      isPair: this.utilsService.getIsPar(utilDto.number),
      isPrime: this.utilsService.esPrime(utilDto.number),
      factorial: this.utilsService.getFactorial(utilDto.number),
      sumN:this.utilsService.getSumN(utilDto.number),
      factors: this.utilsService.GetFactores(utilDto.number),
      fibonaccio: this.utilsService.getFibonacci(utilDto.number)
    };
  }
}
