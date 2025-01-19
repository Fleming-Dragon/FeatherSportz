import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return

    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props
  return (
    <button 
      className="embla__button embla__button--prev" 
      type="button" 
      {...restProps}
    >
      {children || <svg className="embla__button__svg" viewBox="0 0 532 532"><path fill="currentColor" d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454c-13.794-13.796-13.794-36.239 0-50.035C147.35 220.15 334.449 32.765 355.66 11.354Z"/></svg>}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props
  return (
    <button 
      className="embla__button embla__button--next" 
      type="button" 
      {...restProps}
    >
      {children || <svg className="embla__button__svg" viewBox="0 0 532 532"><path fill="currentColor" d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.39c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 20.937 20.931 208.037 208.168 229.332 229.454 13.794 13.796 13.794 36.239 0 50.035-21.019 21.015-208.118 208.4-229.332 229.811Z"/></svg>}
    </button>
  )
}

PrevButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

NextButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}