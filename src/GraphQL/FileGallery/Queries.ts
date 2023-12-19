import { gql } from "@apollo/client";

export const getFile = gql`
  query getFileQuey($id: Int!) {
    fileGallery_getFile(entityId: $id) {
      result {
        id
        name
        user {
          fullName
          id
        }
        complaintFiles {
          fileId
          title
          description
        }
        createdDate
        isDeleted
        lastModifiedDate
      }
      status {
        code
        value
      }
    }
  }
`;
