import EnrolData from "../const/EnrolData";
import Store from "../store/GenericStore";

const EnrolFunc = (id: number) => {
  const item = EnrolData.find((element) => element.id === id);
  if (item?.title) Store.openEnrollModal(item?.title);
};

export default EnrolFunc;
