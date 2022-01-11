// Generated with util/create-component.js
import React from "react";
import { Button, Slider, Icon, Text, Input } from "../../atoms";
import styled from "styled-components";

import { AllocationSliderProps } from "./AllocationSlider.types";

const AllocationSlider: React.FC<AllocationSliderProps> = ({
    percentage,
    onChange,
    tokenImageSrc,
    tokenName,
    tokenSymbol,
    isLocked,
    onClickLock,
    onRemove,
}) => {
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        onChange(Number(event.target.value));
    }
    return (
        <Container data-testid="AllocationSlider">
            <InfoRow>
                <TokenImage src={tokenImageSrc} />
                <NameAndSymbol>
                    <Text.Body variant="bold">{tokenName}</Text.Body>
                    <Text.Footer>{tokenSymbol}</Text.Footer>
                </NameAndSymbol>
                <InputsContainer>
                    <PercentageContainer>
                        <Input
                            disabled={isLocked}
                            type="number"
                            value={percentage}
                            onChange={handleInputChange}
                            rightSlot={"%"}
                        />
                    </PercentageContainer>
                    <LockContainer onClick={() => onClickLock()}>
                        <Icon
                            name={isLocked ? "lock" : "unlock"}
                            color="primary"
                        />
                    </LockContainer>
                    <div>
                        <Button variant="focus" size="small" onClick={onRemove}>
                            <Icon name="times" color="focus-text" />
                            &nbsp; Remove
                        </Button>
                    </div>
                </InputsContainer>
            </InfoRow>
            <Slider value={percentage} onChange={onChange} step={0.01} />
        </Container>
    );
};

export default AllocationSlider;

const Container = styled.div``;

const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const TokenImage = styled.img`
    width: 50px;
    height: 50px;
`;

const NameAndSymbol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`;

const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
`;

const LockContainer = styled.div``;

const PercentageContainer = styled.div`
    width: 100px;
`;