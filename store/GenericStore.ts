import { action, makeObservable, observable } from "mobx";

class GenericStore {
  enrollModal: boolean = false;

  constructor() {
    makeObservable(this, {
      enrollModal: observable,
      openEnrollModal: action,
      closeEntrollModal: action,
    });
  }

  openEnrollModal() {
    console.log("enroll");
    this.enrollModal = true;
  }

  closeEntrollModal() {
    this.enrollModal = false;
  }
}

export { GenericStore };

const Store = new GenericStore();
export default Store;
