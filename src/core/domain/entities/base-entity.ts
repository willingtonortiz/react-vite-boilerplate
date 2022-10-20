import { plainToInstance, instanceToPlain } from "class-transformer";

export class BaseEntity {
  static fromJson<T extends BaseEntity>(data: Record<string, unknown>): T {
    return plainToInstance(this, data) as T;
  }

  toJson(): Record<string, unknown> {
    return instanceToPlain(this);
  }
}
