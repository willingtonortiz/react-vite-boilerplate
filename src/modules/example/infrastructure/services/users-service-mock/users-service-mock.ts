import { Observable, of } from "rxjs";
import { UsersService } from "modules/example/domain/services/users-service/users-service";

export class UsersServiceMock implements UsersService {
  getAllUsers(): Observable<{ name: string }[]> {
    return of([{ name: "FIRST_NAME" }, { name: "LAST_NAME" }]);
  }
}
