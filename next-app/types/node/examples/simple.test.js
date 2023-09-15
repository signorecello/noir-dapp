import { Crs } from '../crs/index.js';
import { Barretenberg } from '../barretenberg/index.js';
import { RawBuffer } from '../types/index.js';
describe('simple', () => {
    let api;
    beforeAll(async () => {
        api = await Barretenberg.new();
        // Important to init slab allocator as first thing, to ensure maximum memory efficiency.
        const CIRCUIT_SIZE = 2 ** 19;
        await api.commonInitSlabAllocator(CIRCUIT_SIZE);
        const crs = await Crs.new(2 ** 19 + 1);
        await api.srsInitSrs(new RawBuffer(crs.getG1Data()), crs.numPoints, new RawBuffer(crs.getG2Data()));
    }, 30000);
    afterAll(async () => {
        await api.destroy();
    });
    it('should construct 512k gate proof', async () => {
        const valid = await api.examplesSimpleCreateAndVerifyProof();
        expect(valid).toBe(true);
    }, 300000);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXhhbXBsZXMvc2ltcGxlLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFOUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxHQUFpQixDQUFDO0lBRXRCLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNuQixHQUFHLEdBQUcsTUFBTSxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFL0Isd0ZBQXdGO1FBQ3hGLE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsTUFBTSxHQUFHLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFaEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFVixRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDbEIsTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDaEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztRQUM3RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQyxDQUFDIn0=