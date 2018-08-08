import React from "react";
import styled from "styled-components";

const DetailedInfo = styled.div``;

export default (props: { name: string }) => (
	<DetailedInfo>{props.name}</DetailedInfo>
);
