import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess} from "../actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {UsuarioService} from "../../services/usuario.service";

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioService,
  ) {
  }

  cargarUsuarios$ = createEffect(
    // @ts-ignore
    () => this.actions$.pipe(
      ofType(cargarUsuarios),
      mergeMap(
        () => this.usuariosService.getUsers()
          .pipe(
            map(users => cargarUsuariosSuccess({usuarios: users})),
            catchError(err => of(cargarUsuariosError({payload: err})))
          )
      )
    )
  );
}
