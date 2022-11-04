import { delay, Observable, of } from "rxjs";
import { UsersService } from "modules/example/domain/services/users-service/users-service";

export class UsersServiceImpl implements UsersService {
  getAllUsers(): Observable<{ name: string }[]> {
    return of([{ name: "John" }, { name: "Doe" }]).pipe(delay(1000));
  }
}
