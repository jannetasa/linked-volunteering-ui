// @flow
import React from 'react';
import Select from './fields/Select';
import type { WithForm } from '../../types/forms';
import type { Event } from '../../types/event';

export default ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit
}: WithForm<Event>) => (
  <form onSubmit={handleSubmit}>
    <Select
      id="area"
      label="form.report.field.year.label"
      required
      error={errors.area}
      touched={touched.area}
      value={values.area}
      onChange={handleChange}
      onBlur={handleBlur}
    >
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
    </Select>
  </form>
);