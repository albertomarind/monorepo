import { TestBed } from '@angular/core/testing';

import { TareasUsuariosService } from './tareas-usuarios.service';

describe('TareasUsuariosService', () => {
  let service: TareasUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
