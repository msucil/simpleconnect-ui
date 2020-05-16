import {Component} from '@angular/core';
import {LookupService} from "./lookup.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LookupRequest, LookupResponse} from "../../openapi";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lookup-update',
  templateUrl: './lookup.update.component.html'
})
export class LookupUpdateComponent {

  isSaving = false;

  editForm = this.fb.group({
    category: [null, [Validators.required]],
    code: [null, [Validators.required]],
    description: [null, [Validators.required]],
    additionalInfo: [null]
  });

  constructor(private service: LookupService, private fb: FormBuilder, private router: Router) {

  }

  previousState(): void {
    this.router.navigate(['lookup']);
  }

  save(): void {
    this.isSaving = true;
    const lookUp = this.createFromForm();
    this.subscribeToSaveResponse(this.service.save(lookUp));
  }

  private createFromForm(): LookupRequest {
    return {
      code: this.editForm.get(['code'])!.value,
      category: this.editForm.get(['category'])!.value,
      description: this.editForm.get([('description')])!.value,
      additionalInfo: this.editForm.get(['additionalInfo'])!.value
    }
  }

  protected subscribeToSaveResponse(result: Observable<LookupResponse>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }


}
