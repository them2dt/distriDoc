const Button = React.forwardRef(function Button(props, ref) {
    const { ownerState, ...other } = props;
    return (
      <button type="button" {...other} ref={ref}>
        {other.children}
        <UnfoldMoreRoundedIcon />
      </button>
    );
  });
  const StyledButton = styled(Button, { shouldForwardProp: () => true })(
    ({ theme }) => `
    font-family: Inter Tight Regular;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 320px;
    padding: 12px;
    border-radius: 12px;
    text-align: left;
    line-height: 1.5;
    background: var(--black);
    border: 0px solid var(--black);
    color: var(--white);
    position: relative;
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background:  var(--white);
      color: var(--black);
    }
  
    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
    `
  );
  const StyledListbox = styled("ul")(
    ({ theme }) => `
    font-family: Inter Tight Regular;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 320px;
    max-height: 300px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: var(--black);
    border: 0px solid var(--black);
    color: var(--white);
    `
  );
  const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: var(--white);
      color: var(--black);
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: var(--white);
      color: var(--black);
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: var(--white);
      color: var(--black);
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: var(--white);
      color: var(--black);
    }
    `
  );
  const StyledGroupRoot = styled("li")`MobileOption
    list-style: none;
  `;
  const StyledGroupHeader = styled("span")`
    display: block;
    padding: 15px 0 5px 10px;
    font-size: 0.75em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: var(--sign);
  `;
  const StyledGroupOptions = styled("ul")`
    list-style: none;
    margin-left: 0;
    padding: 0;
    > li {
      padding-left: 20px;
    }
  `;
  const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
  `;
  const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
    const slots = {
      root: StyledButton,
      listbox: StyledListbox,
      popper: StyledPopper,
      ...props.slots,
    };

    return <SelectUnstyled {...props} ref={ref} slots={slots} />;
  });
  const CustomOptionGroup = React.forwardRef(function CustomOptionGroup(
    props,
    ref
  ) {
    const slots = {
      root: StyledGroupRoot,
      label: StyledGroupHeader,
      list: StyledGroupOptions,
      ...props.slots,
    };

    return <OptionGroupUnstyled {...props} ref={ref} slots={slots} />;
  });
  //start mobile
  const MobileButton = styled(Button, { shouldForwardProp: () => true })(
    ({ theme }) => `
    font-family: Inter Tight Regular;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: calc(80vw - 60px);
    padding: 12px;
    border-radius: 12px;
    text-align: left;
    line-height: 1.5;
    background: var(--black);
    border: 0px solid var(--black);
    color: var(--white);
    position: relative;
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background:  var(--white);
      color: var(--black);
    }
  
    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
    `
  );
  const MobileListbox = styled("ul")(
    ({ theme }) => `
    font-family: Inter Tight Regular;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 10px;
    margin: 12px 0;
    min-width:  calc(80vw - 60px);
    max-height: 300px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: var(--black);
    border: 0px solid var(--black);
    color: var(--white);
    `
  );
  const MobileOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: var(--white);
      color: var(--black);
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: var(--white);
      color: var(--black);
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: var(--white);
      color: var(--black);
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: var(--white);
      color: var(--black);
    }
    `
  );
  const MobileGroupRoot = styled("li")`
    list-style: none;
  `;
  const MobileGroupHeader = styled("span")`
    display: block;
    padding: 15px 0 5px 10px;
    font-size: 0.75em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: var(--sign);
  `;
  const MobileGroupOptions = styled("ul")`
    list-style: none;
    margin-left: 0;
    padding: 0;
    > li {
      padding-left: 20px;
    }
  `;
  const MobilePopper = styled(PopperUnstyled)`
    z-index: 1;
  `;
  const MobileSelect = React.forwardRef(function CustomSelect(props, ref) {
    const slots = {
      root: MobileButton,
      listbox: MobileListbox,
      popper: MobilePopper,
      ...props.slots,
    };

    return <SelectUnstyled {...props} ref={ref} slots={slots} />;
  });
  const MobileOptionGroup = React.forwardRef(function CustomOptionGroup(
    props,
    ref
  ) {
    const slots = {
      root: MobileGroupRoot,
      label: MobileGroupHeader,
      list: MobileGroupOptions,
      ...props.slots,
    };

    return <OptionGroupUnstyled {...props} ref={ref} slots={slots} />;
  });