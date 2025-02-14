import React from 'react';
import { Dropdown, DropdownProps } from '../components/Dropdown';
import { Row } from '@/components/Row';
import { Grid } from '@/components/Grid';
import { Cell } from '@/components/Cell';
import { Paragraph } from '@/components/Paragraph';

const content = [
    {
        text: 'Edit',
        icon: 'edit',
        onClick: (e: any) => {
            console.log('click edit', e);
        },
    },
    {
        text: 'Delete',
        icon: 'delete',
        onClick: (e: any) => {
            console.log('click delete', e);
        },
    },
];

export default {
    title: 'Dropdown',
    component: Dropdown,
    argTypes: {
        theme: {
            control: {
                disable: true,
            },
        },
    },
};

export const dropdown = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A simple dropdown that provides action elements like links and buttons.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Dropdown icon='more_horiz' content={content} />
                <Dropdown icon='add' content={content} />
            </Cell>
        </Row>
    </Grid>
);

export const dropdownWithText = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>The text prop allows the dropdown to be more descriptive.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Dropdown icon='add' content={content} text='Dropdown' trigger='click' />
            </Cell>
        </Row>
    </Grid>
);

export const dropdownWithPlacement = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>You can use the placement prop to adjust the dropdown position.</Paragraph>
                <br></br>
            </Cell>
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={content} text='Bottom' placement='bottom' />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={content} text='Top' placement='top' />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={content} text='Left' placement='bottomLeft' />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={content} text='Right' placement='bottomRight' />
            </Cell>
        </Row>
    </Grid>
);

export const playground = (args: DropdownProps) => {
    if (typeof args.content === 'object' && !Array.isArray(args.content)) {
        // eslint-disable-next-line
        args.content = [];
    }
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Dropdown.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <Dropdown {...args} />
                </Cell>
            </Row>
        </Grid>
    );
};
