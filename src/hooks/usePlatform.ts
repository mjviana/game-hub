import ApiClient from '../services/api-client';
import usePlatforms from './usePlatforms';
import Platform from '../entities/Platform';

const apiClient = new ApiClient<Platform>('/platforms/');

const usePlatform = (platformId?: number) => {
  const { data: platformsData } = usePlatforms();
  return platformsData?.results.find((p) => p.id === platformId);
};

export default usePlatform;
