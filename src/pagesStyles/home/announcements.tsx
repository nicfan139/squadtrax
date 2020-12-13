import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import moment, { Moment } from 'moment';
import { isEmpty } from 'lodash';
import { SectionCard, Text, ItalicSubtext } from 'components';
import { Collapse } from 'antd';

const StyledContainer = styled.div`
  border: 1px solid lightgrey;
  height: 280px;
  overflow-y: scroll;
`;

interface AnnouncementDTO {
  title: string;
  description?: string;
  datetime: Moment;
}

const announcementsList:AnnouncementDTO[] = [
  {
    title: 'Announcment test from admins',
    description: 'Officia ullamco officia ipsum irure do enim. Velit amet aliqua anim excepteur cupidatat eu ea. Elit Lorem mollit voluptate enim velit aliquip veniam aliqua ipsum. Aliquip eiusmod commodo officia veniam pariatur laboris dolor ullamco proident nisi irure nisi esse. Anim qui tempor eu in nisi cillum sunt excepteur est exercitation nulla eu quis. Ea nulla enim eiusmod Lorem cupidatat sit elit officia non. Lorem veniam cupidatat pariatur incididunt in pariatur ut sint adipisicing proident.',
    datetime: moment('2020-08-01'),
  },
  {
    title: 'A great way to end the season!',
    description: 'Dolore aliqua deserunt ad magna esse laboris. Ullamco do duis mollit incididunt excepteur qui ex ea commodo nulla ipsum eu incididunt. Irure culpa labore est in do quis et eiusmod in deserunt ipsum dolor officia dolore.',
    datetime: moment('2020-12-05'),
  },
  {
    title: 'What to expect for the upcoming sesason...',
    description: 'Reprehenderit qui amet incididunt sit proident ad non. Proident adipisicing est voluptate eiusmod consequat aliqua minim adipisicing nostrud deserunt anim aliqua adipisicing reprehenderit. Laborum excepteur qui deserunt ullamco aliqua do ut nostrud elit exercitation irure.',
    datetime: moment('2020-12-19'),
  },
];

export const AnnouncementsBox:FC = () => {
  return (
    <SectionCard title={<>Announcements <FontAwesomeIcon icon={faBullhorn} /></>}>
      {isEmpty(announcementsList) ? (
        <Text italic>Nothing to display at this time...</Text>
      ) : (
        <StyledContainer>
          <Collapse accordion>
            {announcementsList.map((announcement: AnnouncementDTO, index: number) => {
                return (
                  <Collapse.Panel
                    header={announcement.title}
                    key={index + 1}
                    extra={announcement.datetime.format('L')}
                  >
                    <ItalicSubtext>{announcement.datetime.format('hh:mm a')}</ItalicSubtext>
                    <Text>{announcement.description}</Text>
                  </Collapse.Panel>
                )
              }
            )}
          </Collapse>
        </StyledContainer>
      )}
    </SectionCard>
  )
}