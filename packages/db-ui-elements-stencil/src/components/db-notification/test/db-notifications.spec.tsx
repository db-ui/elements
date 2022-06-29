import { newSpecPage } from '@stencil/core/testing';
import { DbNotifications } from '../db-notifications';

describe('db-notifications', () => {
  it('renders a plain notification', async () => {
    const page = await newSpecPage({
      components: [DbNotifications],
      html: `
        <db-notifications>
          <db-notification>
            regular: Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
        </db-notifications>`
    });
    expect(page.root).toMatchSnapshot();
  });
  it('renders several notifications simultaneously', async () => {
    const page = await newSpecPage({
      components: [DbNotifications],
      html: `
        <db-notifications variant="alert">
          <db-notification>
            regular: Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
          <db-notification type="informative">
            informative: Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
          <db-notification type="error">
            error: Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
          <db-notification type="success">
            success: Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
          <db-notification type="warning">
            warning: Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
        </db-notifications>
      `
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders a notification with icon to the left', async () => {
    const page = await newSpecPage({
      components: [DbNotifications],
      html: `
        <db-notifications variant="alert">
          <db-notification>
            <db-icon slot="prenotification" icon="account" variant="20-outline" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
        </db-notifications>
             `
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders a hovering notification', async () => {
    const page = await newSpecPage({
      components: [DbNotifications],
      html: `
        <db-notifications variant="hovering">
          <db-notification type="success">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
        </db-notifications>
             `
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders an error notification', async () => {
    const page = await newSpecPage({
      components: [DbNotifications],
      html: `
        <db-notifications variant="alert">
          <db-notification type="error">
            error: Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
        </db-notifications>
             `
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders an informative notification', async () => {
    const page = await newSpecPage({
      components: [DbNotifications],
      html: `
        <db-notifications variant="alert">
          <db-notification type="informative">
            informative: Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
        </db-notifications>
             `
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders a success notification', async () => {
    const page = await newSpecPage({
      components: [DbNotifications],
      html: `
        <db-notifications variant="alert">
          <db-notification type="success">
            success: Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
        </db-notifications>
             `
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders a warning notification', async () => {
    const page = await newSpecPage({
      components: [DbNotifications],
      html: `
        <db-notifications variant="alert">
          <db-notification type="warning">
            warning: Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </db-notification>
        </db-notifications>
             `
    });
    expect(page.root).toMatchSnapshot();
  });
});
