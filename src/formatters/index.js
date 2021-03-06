import plain from './plain';
import pretty from './pretty';

const formatters = {
  pretty,
  plain,
  json: JSON.stringify,
};

export default (data, format) => formatters[format](data);
