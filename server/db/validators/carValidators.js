var constraints = {};

/**
 * Constraints for creation of an object in the DB
 * @type {Object}
 */
constraints.newCarConst = {
  Name: {
    presence: true
  },
  Trim: {
    presence: true
  },
  HorsePower: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThan: 0
    }
  },
  CompanyID: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThan: 0
    }
  }
};

/**
 * Constraints for update of an object in the DB
 * @type {Object}
 */
constraints.updatedCarConst = {
  HorsePower: {
    numericality: {
      onlyInteger: true,
      greaterThan: 0
    }
  },
  CompanyID: {
    numericality: {
      onlyInteger: true,
      greaterThan: 0
    }
  }
};

/**
 * Constraints for deletion of a object in the DB
 * @type {Object}
 */
constraints.deleteCarConst = {
  ID: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThan: 0
    }
  }
};

module.exports = constraints;
