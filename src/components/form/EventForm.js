import React from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Input from './fields/Input';
import Select from './fields/Select';
import Checkbox from './fields/Checkbox';
import Map from './fields/Map';
import Areas from './partitions/Areas';

const MapContainer = styled.div`
  height: 20em;
  margin-bottom: 2em;
`;

export default ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }}>
        <FormattedMessage tagName="h3" id="form.event.title.name_and_description" />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }}>
        <Input
          type="text"
          id="name"
          label="form.event.field.name.label"
          placeholder="form.event.field.name.placeholder"
          required
          error={errors.name}
          touched={touched.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }}>
        <Input
          type="textarea"
          id="description"
          label="form.event.field.description.label"
          required
          error={errors.description}
          touched={touched.description}
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }}>
        <FormattedMessage tagName="h3" id="form.event.title.time_and_place" />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }} lg={{ size: 4, offset: 1 }}>
        <Select
          id="area"
          label="form.event.field.area.label"
          required
          error={errors.area}
          touched={touched.area}
          value={values.area}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <Areas />
        </Select>
      </Col>
    </Row>
    <Row>
      <Col sm="10" md={{ size: 8, offset: 1 }} lg={{ size: 8, offset: 1 }}>
        <MapContainer>
          <Map
            id="location"
            error={errors.location}
            handleChange={handleChange}
            value={values.location}
          />
        </MapContainer>
      </Col>
    </Row>
    {/*
    <Row>
      <Col sm="12" md={{ size: 4, offset: 1 }}>
        <Input
          type="text"
          id="startdate"
          label="form.event.field.startdate.label"
          placeholder="form.event.field.startdate.placeholder"
          required
          error={errors.startdate}
          touched={touched.startdate}
          value={values.startdate}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
      <Col sm="12" md={{ size: 4 }}>
        <Input
          type="text"
          id="enddate"
          label="form.event.field.enddate.label"
          placeholder="form.event.field.enddate.placeholder"
          required
          error={errors.enddate}
          touched={touched.enddate}
          value={values.enddate}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
      */}
    <Row>
      <Col sm="12" md={{ size: 4, offset: 1 }}>
        <Input
          type="text"
          id="start_time"
          label="form.event.field.starttime.label"
          placeholder="form.event.field.starttime.placeholder"
          required
          error={errors.start_time}
          touched={touched.start_time}
          value={values.start_time}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
      <Col sm="12" md={{ size: 4 }}>
        <Input
          type="text"
          id="end_time"
          label="form.event.field.endtime.label"
          placeholder="form.event.field.endtime.placeholder"
          required
          error={errors.end_time}
          touched={touched.end_time}
          value={values.end_time}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }}>
        <FormattedMessage tagName="h3" id="form.event.title.contact_person" />
        <FormattedMessage tagName="p" id="form.event.subtitle.contact_person" />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 4, offset: 1 }}>
        <Input
          type="text"
          id="organizer_first_name"
          label="form.event.field.first_name.label"
          placeholder="form.event.field.first_name.placeholder"
          required
          error={errors.organizer_first_name}
          touched={touched.organizer_first_name}
          value={values.organizer_first_name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
      <Col sm="12" md={{ size: 4 }}>
        <Input
          type="text"
          id="organizer_last_name"
          label="form.event.field.last_name.label"
          placeholder="form.event.field.last_name.placeholder"
          required
          error={errors.organizer_last_name}
          touched={touched.organizer_last_name}
          value={values.organizer_last_name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 4, offset: 1 }}>
        <Input
          type="text"
          id="organizer_email"
          label="form.event.field.email.label"
          placeholder="form.event.field.name.placeholder"
          required
          error={errors.organizer_email}
          touched={touched.organizer_email}
          value={values.organizer_email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
      <Col sm="12" md={{ size: 4 }}>
        <Input
          type="text"
          id="organizer_phone"
          label="form.event.field.phone.label"
          placeholder="form.event.field.phone.placeholder"
          required
          error={errors.organizer_phone}
          touched={touched.organizer_phone}
          value={values.organizer_phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }}>
        <FormattedMessage tagName="h3" id="form.event.title.others" />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }} lg={{ size: 5, offset: 1 }}>
        <Input
          type="number"
          id="estimated_attendee_count"
          label="form.event.field.amount_of_volunteers.label"
          placeholder="form.event.field.amount_of_volunteers.placeholder"
          required
          error={errors.estimated_attendee_count}
          touched={touched.estimated_attendee_count}
          value={values.estimated_attendee_count}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }} lg={{ size: 5, offset: 1 }}>
        <Input
          type="text"
          id="targets"
          label="form.event.field.cleaning_targets.label"
          placeholder="form.event.field.cleaning_targets.placeholder"
          required
          error={errors.targets}
          touched={touched.targets}
          value={values.targets}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }} lg={{ size: 5, offset: 1 }}>
        <Input
          type="text"
          id="maintenance_location"
          label="form.event.field.trash_location.label"
          placeholder="form.event.field.trash_location.placeholder"
          required
          error={errors.maintenance_location}
          touched={touched.maintenance_location}
          value={values.maintenance_location}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }} lg={{ size: 7, offset: 1 }}>
        <Input
          type="textarea"
          id="additional_information"
          label="form.event.field.details.label"
          error={errors.additional_information}
          touched={touched.additional_information}
          value={values.additional_information}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }}>
        <FormattedMessage tagName="h3" id="form.event.title.tools_and_suplies" />
        <FormattedMessage tagName="p" id="form.event.subtitle.tools_and_suplies" />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }}>
        <Checkbox
          id="has_roll_off_dumpster"
          label="form.event.field.container.label"
          error={errors.has_roll_off_dumpster}
          touched={touched.has_roll_off_dumpster}
          value={values.has_roll_off_dumpster}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }} lg={{ size: 5, offset: 1 }}>
        <Input
          type="number"
          id="trash_bag_count"
          label="form.event.field.trash_bags.label"
          placeholder="form.event.field.trash_bags.placeholder"
          required
          error={errors.trash_bag_count}
          touched={touched.trash_bag_count}
          value={values.trash_bag_count}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }} lg={{ size: 5, offset: 1 }}>
        <Input
          type="text"
          id="trash_picker_count"
          label="form.event.field.trash_pickers.label"
          placeholder="form.event.field.trash_pickers.placeholder"
          required
          error={errors.trash_picker_count}
          touched={touched.trash_picker_count}
          value={values.trash_picker_count}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 1 }}>
        <FormattedMessage tagName="h3" id="form.event.title.visibility" />
      </Col>
    </Row>
  </form>
);
