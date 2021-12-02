import * as React from 'react';

const TwitchIcon = (props) => (
  <svg
    height={32}
    width={32}
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      style={{
        fill: '#fff',
      }}
      d="m67.175 26.001-30.906 78.96V427.68h109.866v58.319h61.813l58.321-58.319h89.329l120.133-120.136V26.001z"
    />
    <path
      style={{
        fill: '#5cdb95',
      }}
      d="m434.558 286.905-68.692 68.693H256.001l-58.322 58.319v-58.319H104.96V67.176h329.598z"
    />
    <path
      style={{
        fill: '#fff',
      }}
      d="M324.692 146.134h41.174v120.03h-41.174zM214.824 146.134h41.177v120.03h-41.177z"
    />
  </svg>
);

export default TwitchIcon;
