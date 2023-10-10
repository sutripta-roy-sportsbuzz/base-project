export enum Responses {
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  USERNAME_REQUIRED = 'Username is required',
  USERNAME_TYPE_ERROR = 'Username must be a string',
  PASSWORD_REQUIRED = 'Password is required',
  PASSWORD_TYPE_ERROR = 'Password must be a string',
  ID_REQUIRED = 'ID is required',
  ID_TYPE_ERROR = 'ID must be a string',
  NO_DATA_BY_ID = 'No data found against this id',
  REQUEST_PAYLOAD_NOT_MATCHED = 'Request payload not matched with schema',
  CONTACT_REQUIRED = 'Contact is required',
  CONTACT_TYPE_ERROR = 'Contact must be a number',
  EMAIL_ID_REQUIRED = 'Email ID is required',
  EMAIL_ID_TYPE_ERROR = 'Email ID must be a string',
  EMAIL_ID_FORMAT_ERROR = 'Email ID format is not correct',
  NAME_TYPE_ERROR = 'Name must be a string',
  CITY_TYPE_ERROR = 'City must be a string',
  IMAGE_URL_TYPE_ERROR = 'Image URL must be a string',
  CREATION_SUCCESS = 'Created Successfully',
  FETCH_SUCCESS = 'Fetched Successfully',
  UPDATION_SUCCESS = 'Updated Successfully',
  DELETION_SUCCESS = 'Deleted Successfully',
  SOMETHING_WENT_WRONG = 'Something went wrong',
}
