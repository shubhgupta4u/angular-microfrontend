import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { FileType, MfeUtil } from 'src/mef/mefutil';


export const mfe = new MfeUtil();

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: () => mfe.loadRemoteFile({
      remoteName: "account",
      remoteEntry: `http://localhost:4201/remoteEntry.js`,
      exposedFile: "AppModule",
      exposeFileType: FileType.Module
    }).then((m) => m.AppModule),
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
