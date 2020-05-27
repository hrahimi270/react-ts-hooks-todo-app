import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";

const checkFrames = keyframes`
    50% {
        transform: scale(1.2);
    }
`;
const CheckBoxWrapper = styled.div``;
const CheckboxLabelSvgParent = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translate3d(0, 0, 0);

	position: relative;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	transform: scale(1);
	border: 1px solid #a0aec0;
	transition: all 0.2s ease;

	&:before {
		content: "";
		width: 100%;
		height: 100%;
		background: #506eec;
		display: block;
		transform: scale(0);
		opacity: 1;
		border-radius: 50%;
		transition-delay: 0.2s;
	}

	svg {
		position: absolute;
		z-index: 1;
		fill: none;
		stroke: white;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-dasharray: 16px;
		stroke-dashoffset: 16px;
		transition: all 0.3s ease;
		transition-delay: 0.1s;
		transform: translate3d(0, 0, 0);
	}
`;
const CheckboxLabelText = styled.span`
	display: flex;
	align-items: center;
	margin-left: 8px;
	color: ${(props) => props.color};
	transform: translate3d(0, 0, 0);

	&:after {
		content: "";
		position: absolute;
		height: 1px;
		width: 100%;
		background: #a0aec0;
		transform-origin: 0 0;
		transform: scaleX(0);
	}
`;
const CheckboxLabel = styled.label`
	display: flex;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;

	&:hover {
		${CheckboxLabelSvgParent} {
			border-color: #3182ce;
		}
	}
`;
const CheckboxInput = styled.input`
	display: none;

	&:checked + ${CheckboxLabel} ${CheckboxLabelSvgParent} {
		border-color: #3182ce;
		background: #3182ce;
		animation: ${checkFrames} 0.6s ease;

		svg {
			stroke-dashoffset: 0;
		}

		&:before {
			transform: scale(2.2);
			opacity: 0;
			transition: all 0.6s ease;
		}
	}

	&:checked + ${CheckboxLabel} ${CheckboxLabelText} {
		color: #a0aec0;
		transition: all 0.3s ease;

		&:after {
			transform: scaleX(1);
			transition: all 0.3s ease;
		}
	}
`;

type props = {
	label: string;
	labelFor: string;
	checked: boolean;
	onChange: Function;
};

export default (props: props) => {
	const { theme } = useContext(ThemeContext);
	const isDark = theme === "dark";
	const labelColor = isDark ? "#edf2f7" : "#1a202c";

	return (
		<CheckBoxWrapper>
			<CheckboxInput
				type="checkbox"
				id={props.labelFor}
				checked={props.checked}
				onChange={() => props.onChange()}
			/>
			<CheckboxLabel htmlFor={props.labelFor}>
				<CheckboxLabelSvgParent>
					<svg viewBox="0 0 12 9" width="12px" height="9px">
						<polyline points="1 5 4 8 11 1"></polyline>
					</svg>
				</CheckboxLabelSvgParent>
				<CheckboxLabelText color={labelColor}>
					{props.label}
				</CheckboxLabelText>
			</CheckboxLabel>
		</CheckBoxWrapper>
	);
};
