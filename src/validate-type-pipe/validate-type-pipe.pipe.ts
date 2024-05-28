import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";

@Injectable()
export class ValidateTypePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const type = value?.type;

    if (!type) {
      throw new BadRequestException(
        'Invalid request. "Type" parameter is missing.'
      );
    }

    if (type !== "retail" && type !== "wholesale") {
      throw new BadRequestException(
        'Invalid type. Type must be "retail" or "wholesale"'
      );
    }
    return value;
  }
}
