export const mapIncomingItinerary = ({ id, data}) => ({
  itinId: id,
  details: data?.details
});
