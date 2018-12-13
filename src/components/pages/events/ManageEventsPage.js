// @flow

import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { Button, Container, Row, Col } from 'reactstrap';
import LocalizedLink from '../../common/LocalizedLink';
import IntlComponent from '../../common/IntlComponent';
import Layout from '../../layout/Layout';

import type { Events } from '../../../types/event';

type Props = {
  events: Events
};

const Wrapper = styled.div`
  padding-top: 3em;
  padding-bottom: 3em;
`;
const DetailsTr = styled.tr`
  background-color: white;
`;

const Td = styled.td`
  padding: ${props => (props.large ? '1em 1em' : '0.5em 1em')};
`;

const FirstTd = styled.td`
  background: ${props => (props.selected ? 'orange' : 'none')};
  width: 5px;
`;

const TrRow = styled.tr`
  background-color: ${props => (props.odd ? '#eeeeee' : '#f9f9f9')};
`;

const Table = styled.table`
  width: 100%;
`;

const Details = ({ children }) => (
  <DetailsTr>
    <FirstTd />
    <Td colSpan={7} large>
      {children}
    </Td>
  </DetailsTr>
);

const ErrorMessage = styled.span`
  color: ${props => props.theme.themeColors.danger};
`;

const DetailsCluster = styled.div`
  display: flex;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  * + * {
    margin-left: 1em;
  }
`;

class EventsPage extends PureComponent<Props> {
  state = {
    visible: null
  };

  componentDidMount() {
    const { getEvents } = this.props;
    getEvents();
  }

  toggleDetails = id => this.setState(({ visible }) => ({ visible: visible === id ? null : id }));

  render() {
    const { events, addNotification } = this.props;
    const { visible } = this.state;
    return (
      <Layout>
        <Wrapper>
          {events && (
            <Container>
              <Row>
                <Col>
                  <Table>
                    <thead>
                      <tr>
                        <th />
                        <IntlComponent
                          Component="th"
                          id="site.page.manage_events.table.header.name"
                        />
                        <IntlComponent
                          Component="th"
                          id="site.page.manage_events.table.header.organizer"
                        />
                        <IntlComponent
                          Component="th"
                          id="site.page.manage_events.table.header.start_date"
                        />
                        <IntlComponent
                          Component="th"
                          id="site.page.manage_events.table.header.created"
                        />
                        <IntlComponent
                          Component="th"
                          id="site.page.manage_events.table.header.state"
                        />
                        <th colSpan="2" />
                      </tr>
                    </thead>
                    <tbody>
                      {events.valueSeq().map((event, i) => {
                        const selected = visible === event.id;
                        return (
                          <Fragment key={event.id}>
                            <TrRow odd={i % 2}>
                              <FirstTd selected={selected} />
                              <Td>{event.name}</Td>
                              <Td>{event.email}</Td>
                              <Td>{event.startdate}</Td>
                              <Td>{event.created}</Td>
                              <Td>{event.state}</Td>
                              <Td>
                                <IntlComponent
                                  Component={LocalizedLink}
                                  to={`event/modify/${event.id}`}
                                  id="site.page.manage_events.table.action.edit"
                                />
                              </Td>
                              <Td>
                                <Button color="link" onClick={() => this.toggleDetails(event.id)}>
                                  {selected ? 'Sulje' : 'Avaa'}
                                </Button>
                              </Td>
                            </TrRow>
                            {selected && (
                              <Details>
                                <DetailsCluster>
                                  <span>i</span>
                                  <strong>
                                    {event.first_name} {event.last_name}
                                  </strong>
                                  <span>{event.email}</span>
                                </DetailsCluster>
                                <DetailsCluster>
                                  <span>i</span>
                                  <strong>Osoitejuttu?</strong>
                                </DetailsCluster>
                                <p>{event.description}</p>
                                <div>
                                  <IntlComponent
                                    Component={Button}
                                    id="site.page.manage_events.table.action.approve"
                                    color="primary"
                                    onClick={() =>
                                      addNotification({
                                        color: 'success',
                                        message: 'notification.manage_events.approve',
                                        values: { name: event.name }
                                      })
                                    }
                                  />
                                  <Button
                                    color="link"
                                    onClick={() =>
                                      addNotification({
                                        color: 'info',
                                        message: 'notification.manage_events.remove',
                                        values: { name: event.name }
                                      })
                                    }
                                  >
                                    <IntlComponent
                                      Component={ErrorMessage}
                                      id="site.page.manage_events.table.action.remove"
                                    />
                                  </Button>
                                </div>
                              </Details>
                            )}
                          </Fragment>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          )}
        </Wrapper>
      </Layout>
    );
  }
}

export default EventsPage;