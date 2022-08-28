import { action, makeObservable, observable } from "mobx";

class GenericStore<T> {
  enrolModal: boolean = false;
  enrolTitle: string = "";

  constructor() {
    makeObservable(this, {
      enrolModal: observable,
      enrolTitle: observable,
      openEnrollModal: action,
      getEnrolState: action,
      getEnrolTitle: action,
      closeEnrolModal: action,
    });
  }

  openEnrollModal(title: string) {
    console.log("enroll");
    this.enrolModal = true;
    this.enrolTitle = title;
  }

  closeEnrolModal() {
    this.enrolModal = false;
  }

  getEnrolState() {
    return this.enrolModal;
  }

  getEnrolTitle() {
    return this.enrolTitle;
  }
}

export { GenericStore };

const Store = new GenericStore();
export default Store;
