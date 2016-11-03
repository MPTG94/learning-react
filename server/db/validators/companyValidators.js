var constraints = {};

/**
 * Constraints for creation of an object in the DB
 * @type {Object}
 */
constraints.newCompanyConst = {
  Name: {
    presence: true
  },
  Established: {
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
constraints.updatedCompanyConst = {
  Established: {
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
constraints.deleteCompanyConst = {
  ID: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThan: 0
    }
  }
};

module.exports = constraints;
