import { Injectable } from '@nestjs/common';

@Injectable()
export class SlugService {
  makeSlug(input: string): string {
    // Convert to lowercase and replace non-alphanumeric characters with dashes
    const slug = input.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    // Remove leading and trailing dashes
    return slug.replace('/^-+|-+$/g', '');
  }
}
