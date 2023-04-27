import { renderHook } from '@testing-library/react-hooks';
import { useOnlineState } from './useOnlineState';

describe('useOnlineState', () => {
    it('should return initial online and isShow state', () => {
        const { result } = renderHook(() => useOnlineState());
        expect(result.current.online).toBe(true);
        expect(result.current.isShow).toBe(false);
    });

    it('should update online state when connection offline', () => {
        const { result } = renderHook(() => useOnlineState());
        const handleOffline = new Event('offline');
        window.dispatchEvent(handleOffline);
        expect(result.current.online).toBe(false);
        expect(result.current.isShow).toBe(true);
    });
    it('should update online state when connection online again', () => {
        const { result } = renderHook(() => useOnlineState());
        const handleOnline = new Event('online');
        window.dispatchEvent(handleOnline);
        expect(result.current.online).toBe(true);
        expect(result.current.isShow).toBe(true);
    });
});





