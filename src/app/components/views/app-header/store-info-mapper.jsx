export const mapIncomingStoreData = ({name, store_identifier, id}) => ({
    text: name,
    storeIdentifier: store_identifier,
    value: id,
  });
