import { Observable } from "rxjs";

export interface UsersService {
  getAllUsers(): Observable<{ name: string }[]>;
}
