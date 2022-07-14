import {
  DbLink,
  DbLinklist,
  DbNotifications,
  DbNotification,
  DbIcon,
  DbButton
} from '@db-ui/react-elements';
import { useState } from 'react';

function OtherComponents() {
  const [notification, setNotification] = useState(false);

  return (
    <div>
      <p>Link list:</p>
      <DbLinklist>
        <li>
          <DbLink href="https://db-ui.github.io/elements/" target="_blank">
            DB UI Elements components documentation
          </DbLink>
        </li>
        <li>
          <DbLink href="https://db-ui.github.io/elements/" target="_blank">
            DB UI Core components documentation
          </DbLink>
        </li>
      </DbLinklist>
      <p>Notification:</p>
      <DbButton
        variant="primary"
        onClick={(_) => {
          setNotification(true);
        }}
      >
        Open Notification!
      </DbButton>
      {notification && (
        <DbNotifications variant="hovering">
          <DbNotification type="success">
            <DbIcon
              icon="account"
              slot="prenotification"
              variant="20-outline"
              onClick={() => {
                console.log('icon clicked');
              }}
            />
            success: Lorem ipsum dolor sit amet, consectetur adipisicing elit
            <DbIcon
              icon="close"
              slot="postnotification"
              variant="20-outline"
              onClick={() => {
                console.log('second icon clicked');
                setNotification(false);
              }}
              tabindex="0"
              role="button"
              onKeyPress={() => {
                setNotification(false);
              }}
            />
          </DbNotification>
        </DbNotifications>
      )}
    </div>
  );
}

export default OtherComponents;
