import { gql } from "@apollo/client";

export const getFile = gql`
  query getFileQuery($id: Int!) {
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

export const GetFileFull = gql`
query GetFileFull(
  $filter : FileGalleryFilterInput
  $order : [FileGallerySortInput!]
  $skip : Int
  $take : Int
){
  fileGallery_getFiles{
    result(where: $filter,order: $order,skip: $skip,take: $take){
      items{
        id
        userId
        name
        user{
          fullName
          id
        } 
      }
  }
  }
}
`;
