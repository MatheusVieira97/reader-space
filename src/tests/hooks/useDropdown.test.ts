import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react';
import { useDropdown } from '../../hooks/useDropdown';

describe('useDropdown', () => {
  it('should initialize with isOpen as false', () => {
    const { result } = renderHook(() => useDropdown());

    expect(result.current.isOpen).toBe(false);
  });

  it('should toggle isOpen state when toggle is called', () => {
    const { result } = renderHook(() => useDropdown());

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('should open dropdown when open is called', () => {
    const { result } = renderHook(() => useDropdown());

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.open();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.open();
    });
    expect(result.current.isOpen).toBe(true);
  });

  it('should close dropdown when close is called', () => {
    const { result } = renderHook(() => useDropdown());

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.open();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.close();
    });
    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.close();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('should return all expected methods', () => {
    const { result } = renderHook(() => useDropdown());

    expect(result.current).toHaveProperty('isOpen');
    expect(result.current).toHaveProperty('toggle');
    expect(result.current).toHaveProperty('close');
    expect(result.current).toHaveProperty('open');

    expect(typeof result.current.toggle).toBe('function');
    expect(typeof result.current.close).toBe('function');
    expect(typeof result.current.open).toBe('function');
  });
});
