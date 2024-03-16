/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComplaintState, ComplaintStateStatus } from "../gql/graphql";

export function getComplaintStateWithEnum(
  state: ComplaintStateStatus
): ComplaintState {
  const complaintStates = JSON.parse(
    localStorage.getItem("complaintStates") || "[]"
  ) as ComplaintState[];
  return (
    complaintStates.find((c) => c.state === state) || {
      id: 0,
      englishName: "",
      persianName: "",
      state: ComplaintStateStatus.WaitingForNewOfferorsInfo,
      createdDate: "",
      isDeleted: false,
      priority: 0,
    }
  );
}

export function getComplaintStateWithId(
  id: number
): ComplaintState | undefined {
  const complaintStates = JSON.parse(
    localStorage.getItem("complaintStates") || "[]"
  ) as ComplaintState[];
  return complaintStates.find((c) => c.id === id);
}
