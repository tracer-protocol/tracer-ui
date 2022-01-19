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
    removeButtonText,
    onClickLock,
    onRemove,
}) => {
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        let newValue = Number(event.target.value);
        if (newValue > 100) newValue = 100;
        if (newValue < 0) newValue = 0;
        onChange(newValue);
    }
    return (
        <Container data-testid="AllocationSlider">
            <InfoRow>
                <TokenImage src={tokenImageSrc} />
                <NameAndSymbol>
                    <Text weight="bold">{tokenName}</Text>
                    <Text size="footer">{tokenSymbol}</Text>
                </NameAndSymbol>
                <InputsContainer>
                    <PercentageContainer>
                        <Input
                            disabled={isLocked}
                            type="number"
                            max={100}
                            min={0}
                            step={0.01}
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
                            &nbsp; {removeButtonText}
                        </Button>
                    </div>
                </InputsContainer>
            </InfoRow>
            <Slider
                value={percentage}
                onChange={onChange}
                step={0.01}
                disabled={isLocked}
            />
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
    margin-left: 16px;
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
