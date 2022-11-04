import { plainToInstance, instanceToPlain } from "class-transformer";
import { Properties } from "shared/utils/utility-types/utility-types";

export class BaseEntity {
  static fromJson<T extends BaseEntity>(data: Record<string, unknown>): T {
    return plainToInstance(this, data) as T;
  }

  toJson(): Record<string, unknown> {
    return instanceToPlain(this);
  }

  public copyWith(modifyObject: Partial<Properties<this>>): this {
    return Object.assign(Object.create(this.constructor.prototype), {
      ...this,
      ...modifyObject,
    });
  }
}
